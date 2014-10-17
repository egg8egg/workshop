'use strict';

var IndexModel = require('../models/index');
var ContactsModel = require('../models/contacts');

module.exports = function (router) {
    var indexModel = new IndexModel();
    var contactsModel = new ContactsModel();

    router.get('/', function (req, res) {
        res.render('index', indexModel);
    });

    router.get('/contacts', function (req, res) {
        res.render('contacts_main', contactsModel);
    });

    router.get('/contacts_ajax', function (req, res) {
        res.json({
        	name: 'hahaha'
        });
    });
};