const router = require('express').Router();
let Questions = require('../models/Questions.model')


router.route('/').get((req, res) => {
    Questions.find()
        .then(news => res.json(news))
        .catch(err => res.status(400).json('Error ' + err))
});


// เพิ่ม ข่าว
router.route('/add').post((req, res) => {
    const Template_id = req.body.Template_id;
    const Template_name = req.body.Template_name;
    const questions = [{
        kpi_id: req.body.questions.kpi_id,
        kpi_names: req.body.questions.kpi_names,
        start_date: req.body.questions.start_date,
        end_date: req.body.questions.end_date,
        Template_id: req.body.questions.Template_id,
        Indicators: [{
                kpi_id: req.body.questions.kpi_id,
                indicator_lv: req.body.questions.Indicators[0].indicator_lv,
                indicator_detail: req.body.questions.Indicators[0].indicator_detail
            },
            {
                kpi_id: req.body.questions.kpi_id,
                indicator_lv: req.body.questions.Indicators[1].indicator_lv,
                indicator_detail: req.body.questions.Indicators[1].indicator_detail
            },
            {
                kpi_id: req.body.questions.kpi_id,
                indicator_lv: req.body.questions.Indicators[2].indicator_lv,
                indicator_detail: req.body.questions.Indicators[2].indicator_detail
            },
            {
                kpi_id: req.body.questions.kpi_id,
                indicator_lv: req.body.questions.Indicators[3].indicator_lv,
                indicator_detail: req.body.questions.Indicators[3].indicator_detail
            },
            {
                kpi_id: req.body.questions.kpi_id,
                indicator_lv: req.body.questions.Indicators[4].indicator_lv,
                indicator_detail: req.body.questions.Indicators[4].indicator_detail
            },
        ]
    }]
    const questionNews = new Questions({
        Template_id,
        Template_name,
        questions
    })
    questionNews.save()

    .then(() => res.json('QuestionNews added !'))
        .catch(err => res.status(400).json('Error ' + err));
});

// หา news by id
router.route('/:id').get((req, res) => {
    Questions.findById(req.params.id)
        .then((news) => res.json(news))
        .catch(err => res.status(400).json('Error ' + err));
});


// ลบ news by id
router.route('/:id').delete((req, res) => {
    Questions.findByIdAndDelete(req.params.id)
        .then(() => res.json('News deleted !'))
        .catch(err => res.status(400).json('Error ' + err));
});

// อัปเดต news by id
router.route('/update/:id').post((req, res) => {
    Questions.findById(req.params.id)
        .then(question => {
            question.kpi_id = req.body.kpi_id;
            question.kpi_names = req.body.kpi_names;
            question.questtions = {
                kpi_id: req.body.kpi_id,
                kpi_names: req.body.kpi_names,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                Template_id: req.body.Template_id,
                Indicators: {
                    kpi_id: req.body.kpi_id,
                    indicator_lv: req.body.indicator_lv,
                    indicator_detail: req.body.indicator_detail
                }
            }

            question.save()
                .then(() => res.json('question updated !!'))
                .catch((err) => res.status(400).json('Error ' + err));
        })
        .catch((err) => res.status(400).json('Error ' + err));

});


module.exports = router;