var express = require('express');

var router = express.Router();
var mongoose = require('mongoose');
var Link = mongoose.model('Link');
var Category = mongoose.model('Category');
//links
//get all links
router.get('/links',function(req,res){
            Link.find(function(err,data){
                if(err){
                    res.send(500,err);
                }
                res.send(data);
            })
});
//create new link
router.post('/links',function(req,res){
            var link = new Link(req.body);
            link.save(function(err,link){
                if(err){
                    res.send(500,err);
                }
                res.send(link);
            });
});
//get specfic link by id
router.get('/links/:id',function(req,res){
            Link.findById(req.params.id,function(err,link){
                if(err){
                    res.send(500,err);
                }
                res.send(link);
            });
});
//update link
router.put('/links/:id',function(req,res){
            Link.findById(req.params.id,function(err,link){
                if(err){
                    res.send(500,err);
                }
                link.title = req.body.title;
                link.url = req.body.url;
                link.icon = req.body.icon;
                link.category = req.body.category
                link.save(function(err,link){
                if(err){
                    res.send(500,err);
                }
                res.send(link);
            });
            });
            
});
//delete link
router.delete('/links/:id',function(req,res){
           Link.findById(req.params.id,function(err,link){
                if(err){
                    res.send(500,err);
                }
                link.remove(function(err,data){
                    if(err){
                        res.send(500,err);
                    }
                    res.send(data);
                });
            });
});

//categorys
//get all links
router.get('/categories',function(req,res){
            Category.find(function(err,data){
                if(err){
                    res.send(500,err);
                }
                res.send(data);
            })
});
//create new link
router.post('/categories',function(req,res){
            var category = new Category(req.body);
            category.save(function(err,link){
                if(err){
                    res.send(500,err);
                }
                res.send(category);
            });
});
//get specfic link by id
router.get('/categories/:id',function(req,res){
            Category.findById(req.params.id,function(err,link){
                if(err){
                    res.send(500,err);
                }
                res.send(link);
            });
});
//update link
router.put('/categories/:id',function(req,res){
            Category.findById(req.params.id,function(err,category){
                if(err){
                    res.send(500,err);
                }
                category.name = req.body.name;
               

                category.save(function(err,category){
                if(err){
                    res.send(500,err);
                }
                res.send(category);
            });
            });
            
});
//delete link
router.delete('/categories/:id',function(req,res){
           Category.findById(req.params.id,function(err,category){
                if(err){
                    res.send(500,err);
                }
                category.remove(function(err,data){
                    if(err){
                        res.send(500,err);
                    }
                    res.send(data);
                });
            });
});

module.exports = router;