/**
 * Created by oleksandr on 01.02.16.
 */
var DataModule = (function(){
    var books = [
        {
            ID: 1,
            title: 'Jewels of Nizam',
            author: 'Geeta Devi',
            rating: 5,
            price: 100,
            date: 2015,
            cover: 'img/book-cover.png'
        },
        {
            ID: 2,
            title: 'Cakes & Bakes',
            author: 'Sanjeev Kapoor',
            rating: 5,
            price: 80,
            date: 2012,
            cover: 'img/book-cover%20(1).png'
        },
        {
            ID: 3,
            title: 'Jamie\'s Kitchen',
            author: 'Jamie Oliver',
            rating: 4,
            price: 'book for free',
            date: 2014,
            cover: 'img/book-cover%20(2).png'
        },
        {
            ID: 4,
            title: 'Inexpensive Family Meals',
            author: 'Simon Holst',
            rating: 4,
            price: 'book for free',
            date: 2010,
            cover: 'img/book-cover%20(3).png'
        },
        {
            ID: 5,
            title: 'Paleo Slow Cooking',
            author: 'Chrissy Gower',
            rating: 4,
            price: 50,
            date: 2014,
            cover: 'img/book-cover%20(4).png'
        },
        {
            ID: 6,
            title: 'Cook Like an Italian',
            author: 'Tobie Puttock',
            rating: 4,
            price: 'book for free',
            date: 2013,
            cover: 'img/book-cover%20(5).png'
        },
        {
            ID: 7,
            title: 'Suneeta Vaswani',
            author: 'Geeta Devi',
            rating: 5,
            price: 75,
            date: 2007,
            cover: 'img/book-cover%20(6).png'
        },
        {
            ID: 8,
            title: 'Jamie Does',
            author: 'Jamie Oliver',
            rating: 4,
            price: 'book for free',
            date: 2008,
            cover: 'img/book-cover%20(7).png'
        },
        {
            ID: 9,
            title: 'Jamie\'s italy',
            author: 'Jamie Oliver',
            rating: 5,
            price: 40,
            date: 2011,
            cover: 'img/book-cover%20(8).png'
        },
        {
            ID: 10,
            title: 'Vegetables Cookbook',
            author: 'Matthew Biggs',
            rating: 3,
            price: 120,
            date: 2010,
            cover: 'img/book-cover%20(9).png'
        }
    ];

    var users = [
        {
            usrID: 100001,
            usrFirstName: 'John',
            usrLastName: 'Doe',
            usrImg: 'img/avatar-01.png',
            usrReading: [],
            usrPurchase: [],
            usrFavourite: [],
            usrWishList: []
        },
        {
            usrID: 100002,
            usrFirstName: 'David',
            usrLastName: 'Bowe',
            usrImg: 'img/avatar-02.png',
            usrReading: [],
            usrPurchase: [],
            usrFavourite: [],
            usrWishList: []
        }
    ];

    function getBooks(){
        return books;
    }
    function getUsers(activeID){
        var oneUser = [];
        for (var i = 0; i < users.length; i++){
            if (users[i].usrID === activeID){
                oneUser.push(users[i])
            }
        }
        return oneUser;
    }
    function setBooks(data){
        for (var i = 0; i < data.length; i++){
            if (data[i].ID !== parseInt(data[i].ID || !data[i].title)){
                console.info('Error. Can\'t save changes to books.');
                return;
            }
        }
        // Turned off till setBooks usage.
        //books = data;
        //console.info('Changed books set success!');
    }
    function setUsers(data){
        for (var i = 0; i < data.length; i++){
            if (data[i].ID !== parseInt(data[i].ID || !data[i].usrFirstName)){
                console.info('Error. Can\'t save changes to users.');
                return;
            }
        }
        users = data;
        console.info('Changed users set success!');
    }

    return {
        getBooks: getBooks,
        getUsers: getUsers,
        setBooks: setBooks,
        setUsers: setUsers
    };
}());