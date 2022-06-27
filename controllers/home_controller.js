
class HomeController {

   // [Get] /
   index(req, res) {
    res.status(200).render('index', {
        style:'user-login.css',
        title:'Home'
    });
   }

   not_found(req, res) {
       res.status(404).send({
           "error": {
               "errors": [
                   {
                       "domain": "global",
                       "reason": "notFound",
                       "message": "Not Found " + req.params.slug
                   }
               ],
               "code": 404,
               "message": "Not Found " + req.params.slug
           }
       });
   }
}

module.exports = new HomeController;
