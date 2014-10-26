'use strict';

var IndexModel = require('../models/index');
var BlogModel = require('../models/blog');
var ContactsModel = require('../models/contacts');
var NewsModel = require('../models/news');
var AboutModel= require('../models/about');
var CalendarModel= require('../models/calendar');
var CoursesModel= require('../models/courses');
var Course_detailModel= require('../models/course_detail');
var GalleryModel= require('../models/gallery');

module.exports = function (router) {
    var indexModel = new IndexModel();
    var blogModel = new BlogModel();
    var contactsModel = new ContactsModel();
    var newsModel = new NewsModel();
    var aboutModel = new AboutModel();
    var calendarModel = new CalendarModel();
    var coursesModel = new CoursesModel();
    var course_detailModel = new Course_detailModel();
    var galleryModel = new GalleryModel();


    router.get('/', function (req, res) {
        res.render('index', indexModel);
    });

    router.get('/blog', function (req, res) {
        res.render('index', blogModel);
    });

    router.get('/contacts', function (req, res) {
        res.render('index', contactsModel);
    });

    router.get('/news', function (req, res) {
        res.render('index', newsModel);
    });

    router.get('/about', function (req, res) {
        res.render('index', aboutModel);
    });

    router.get('/calendar', function (req, res) {
        res.render('index', calendarModel);
    });

    router.get('/courses', function (req, res) {
        res.render('index', coursesModel);
    });

    router.get('/course_detail', function (req, res) {
        res.render('index', course_detailModel);
    });

    router.get('/gallery', function (req, res) {
        res.render('index', galleryModel);
    });

};











