const router = require('express').Router();
// let Questions = require('../models/QuestionsList.model')
let NewQuestion = require('../models/NewQuestion.model')



router.route('/').get((req, res) => {
    NewQuestion.find()
        .then(news => res.json(news))
        .catch(err => res.status(400).json('Error ' + err))
});



router.route('/newQuestion').post((req, res) => {
    var body = req.body;

    var questionItem = new NewQuestion();

    //for each products item, push it to orderItem.products
    questionItem.Template_id = body.Template_id
    questionItem.Template_name = body.Template_name;
    body.questions.forEach(function(question) {
        questionItem.questions.push({
            Template_id: question.Template_id,
            KPI_Type_id: question.KPI_Type_id,
            KPI_name: question.KPI_name,
            KPI_detail: question.KPI_detail,
            KPI_weight: question.KPI_weight,
            Indicators: question.Indicators,
            InsertTagetToChief: question.InsertTagetToChief,
            start_date: question.start_date,
            end_date: question.end_date
        });
    });
    questionItem.totalQuantity = body.totalQuantity;
    questionItem.totalPrice = body.totalPrice;
    questionItem.otherShipAd = body.customAdd;
    questionItem.modeOfPayment = body.modeOfPayment;

    // questionItem.save()
    questionItem.save()
        .then(() => res.json('Template addedd !'))
        .catch(err => res.status(400).json('Error ' + err));
});

// ลบ news by id
router.route('/delete/:id').delete((req, res) => {
    NewQuestion.findByIdAndDelete(req.params.id)
        .then(() => res.json('Template deleted !'))
        .catch(err => res.status(400).json('Error ' + err));
});


// หา NewQuestion by id
router.route('/:id').get((req, res) => {
    NewQuestion.findById(req.params.id)
        .then((news) => res.json(news))
        .catch(err => res.status(400).json('Error ' + err));
});

// อัปเดต NewQuestion by id
router.route('/:id').put((req, res) => {
    var body = req.body;
    let data = {
        Template_name: body.Template_name,
        questions: body.questions
    };
    NewQuestion.findOneAndUpdate({ "_id": req.params.id }, data)
        .then(() => res.json('Template update !'))
        .catch(err => res.status(400).json('Error ' + err));

})

module.exports = router;