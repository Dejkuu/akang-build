const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/userModel');
const Link = require('../models/linkModel');
const Task = require('../models/taskModel');
const Notification = require('../models/notificationModel');

module.exports = class API {

    // users

    static async fetchAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async fetchUser(req, res) {
        try {
            const user = await User.findOne({ nick: req.body.nick });

            if (user) {
                const auth = await bcrypt.compare(req.body.password, user.password);

                if (auth) {
                    res.status(200).json({
                        duration: 3,
                        status: "success",
                        message: "Pomyślnie zalogowano",
                        content: user
                    });
                } else {
                    res.status(200).json({
                        duration: 5,
                        status: "warning",
                        error: "badPass",
                        message: "Błędne hasło!"
                    });
                }
            } else {
                res.status(200).json({
                    duration: 5,
                    status: "warning",
                    error: "notFound",
                    message: "Nie znaleziono konta!"
                });
            }
        } catch (error) {
            res.status(401).json({
                duration: 6,
                status: "error",
                message: "Wystąpił nieoczekiwany błąd!"
            });
        }
    }

    static async fetchUser_NV(req, res) {
        try {
            const user = await User.findOne({ _id: req.body.user });
            res.status(200).json({
                status: "success",
                content: user
            })
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async createUser(req, res) {
        try {
            if (req.body.code === process.env.Code) {
                await User.create({
                    nick: req.body.nick,
                    password: req.body.password
                }.then(user => {
                    res.status(200).json({
                        duration: 3,
                        status: "success",
                        message: "Pomyślnie utworzono konto",
                        content: user
                    });
                })
                )
            } else {
                res.status(200).json({
                    duration: 5,
                    status: "warning",
                    error: "badCode",
                    message: "Błędny kod!"
                });
            }

        } catch (error) {
            res.status(401).json({
                duration: 6,
                status: "error",
                message: error.message
            });
        }
    }

    static async updateUser(req, res) {
        try {
            const user = await User.findOne({ nick: req.body.data.nick });

            if (user) {
                const auth = await bcrypt.compare(req.body.data.oldPassword, user.password);

                if (auth) {
                    const updatedUser = await User.updateOne({ nick: req.body.data.nick }, {
                        $set: {
                            password: req.body.data.newPassword
                        }
                    });

                    if (updatedUser) {
                        res.status(200).json({
                            duration: 3,
                            status: "success",
                            message: "Zmieniono hasło"
                        });
                    } else {
                        res.status(200).json({
                            duration: 5,
                            status: "warning",
                            message: "Nie udało się zmienić hasła!"
                        });
                    }
                } else {
                    res.status(200).json({
                        duration: 5,
                        status: "warning",
                        message: "Błędne hasło!"
                    });
                }
            } else {
                res.status(200).json({
                    duration: 5,
                    status: "warning",
                    message: "Nie znaleziono konta!"
                });
            }
        } catch (error) {
            res.status(401).json({
                duration: 6,
                status: "error",
                message: error.message
            });
        }
    }

    // links

    static async fetchAllLinks(req, res) {
        try {
            const links = await Link.find();
            res.status(200).json(links)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async postLink(req, res) {
        try {
            await Link.create({
                nick: req.body.nick,
                game: req.body.game,
                link: req.body.link,
                desc: req.body.desc
            }).then(async () => {
                await Notification.create({
                    title: "Nowy link z",
                    desc: req.body.game,
                    status: "added",
                    routerLink: "linki"
                });

                res.status(200).json({
                    duration: 8,
                    status: "success",
                    message: "Pomyślnie wysłano link"
                });
            });
        } catch (error) {
            res.status(200).json({
                duration: 6,
                status: "warning",
                message: "Nie udało się wysłać linku"
            });
        }
    }

    static async deleteLink(req, res) {
        try {
            await Link.deleteOne({ _id: req.body._id })
                .then(() => {
                    res.status(200).json({
                        duration: 3,
                        status: "success",
                        message: "Usunięto link"
                    });
                });
        } catch (error) {
            res.status(401).json({
                duration: 6,
                status: "error",
                message: error.message
            });
        }
    }

    // tasks

    static async fetchAllTasks(req, res) {
        try {
            const tasks = await Task.find();
            res.status(200).json(tasks)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async postTask(req, res) {
        try {
            await Task.create({
                title: req.body.title,
                desc: req.body.desc,
                status: req.body.status,
                important: req.body.important,
                createdBy: req.body.createdBy
            }).then(async task => {
                await Notification.create({
                    title: "Stworzono nowe zadanie",
                    desc: " ",
                    status: "added",
                    routerLink: `zadania/${task._id}`
                });

                res.status(200).json({
                    duration: 3,
                    status: "success",
                    message: "Dodano nowe zadanie",
                    content: task._id
                });
            });

        } catch (error) {
            res.status(401).json({
                duration: 6,
                status: "error",
                message: error.message
            });
        }
    }

    static async deleteTask(req, res) {
        try {
            await Task.deleteOne({ _id: req.body._id })
                .then(() => {
                    res.status(200).json({
                        duration: 3,
                        status: "success",
                        message: "Usunięto zadanie"
                    });
                });
        } catch (error) {
            res.status(401).json({
                duration: 6,
                status: "error",
                message: error.message
            });
        }
    }

    static async updateTask(req, res) {
        try {
            await Task.updateOne({ _id: req.body.data._id }, {
                $set: {
                    title: req.body.data.title,
                    desc: req.body.data.desc,
                    status: req.body.data.status,
                    important: req.body.data.important,
                }
            })
                .then(() => {
                    res.status(200).json({
                        duration: 3,
                        status: "success",
                        message: "Zaktualizowano zadanie"
                    });
                });
        } catch (error) {
            res.status(401).json({
                duration: 6,
                status: "error",
                message: error.message
            });
        }
    }

    // notifications

    static async fetchAllNotifications(req, res) {
        try {
            const tasks = await Notification.find().sort({ createdAt: -1 });
            res.status(200).json(tasks)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
}