const router = require('express').Router();
let Questions = require('../models/QuestionsList.model')


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
            Template_id: req.body[0].questions[0].Template_id,
            KPI_id: req.body.questions[0].KPI_id,
            KPI_Type_id: req.body.questions[0].KPI_Type_id,
            KPI_name: req.body.questions[0].KPI_name,
            KPI_detail: req.body.questions[0].KPI_detail,
            KPI_weight: req.body.questions[0].KPI_weight,
            Indicators: [{
                    KPI_id: req.body.questions[0].Indicators[0].KPI_id,
                    indicator_lv: req.body.questions[0].Indicators[0].indicator_lv,
                    indicator_detail: req.body.questions[0].Indicators[0].indicator_detail
                },
                {
                    KPI_id: req.body.questions[0].Indicators[1].KPI_id,
                    indicator_lv: req.body.questions[0].Indicators[1].indicator_lv,
                    indicator_detail: req.body.questions[0].Indicators[1].indicator_detail
                },
                {
                    KPI_id: req.body.questions[0].Indicators[2].KPI_id,
                    indicator_lv: req.body.questions[0].Indicators[2].indicator_lv,
                    indicator_detail: req.body.questions[0].Indicators[2].indicator_detail
                },
                {
                    KPI_id: req.body.questions[0].Indicators[3].KPI_id,
                    indicator_lv: req.body.questions[0].Indicators[3].indicator_lv,
                    indicator_detail: req.body.questions[0].Indicators[3].indicator_detail
                },
                {
                    KPI_id: req.body.questions[0].Indicators[4].KPI_id,
                    indicator_lv: req.body.questions[0].Indicators[4].indicator_lv,
                    indicator_detail: req.body.questions[0].Indicators[4].indicator_detail
                },
            ],
            InsertTagetToChief: req.body.questions[0].InsertTagetToChief,
            start_date: req.body.questions[0].start_date,
            end_date: req.body.questions[0].end_date,
        },
        // {
        //     Template_id: req.body.questions[1].Template_id,
        //     KPI_id: req.body.questions[1].KPI_id,
        //     KPI_Type_id: req.body.questions[1].KPI_Type_id,
        //     KPI_name: req.body.questions[1].KPI_name,
        //     KPI_detail: req.body.questions[1].KPI_detail,
        //     KPI_weight: req.body.questions[1].KPI_weight,
        //     Indicators: [{
        //             KPI_id: req.body.questions[1].Indicators[0].KPI_id,
        //             indicator_lv: req.body.questions[1].Indicators[0].indicator_lv,
        //             indicator_detail: req.body.questions[1].Indicators[0].indicator_detail
        //         },
        //         {
        //             KPI_id: req.body.questions[1].Indicators[1].KPI_id,
        //             indicator_lv: req.body.questions[1].Indicators[1].indicator_lv,
        //             indicator_detail: req.body.questions[1].Indicators[1].indicator_detail
        //         },
        //         {
        //             KPI_id: req.body.questions[1].Indicators[2].KPI_id,
        //             indicator_lv: req.body.questions[1].Indicators[2].indicator_lv,
        //             indicator_detail: req.body.questions[1].Indicators[2].indicator_detail
        //         },
        //         {
        //             KPI_id: req.body.questions[1].Indicators[3].KPI_id,
        //             indicator_lv: req.body.questions[1].Indicators[3].indicator_lv,
        //             indicator_detail: req.body.questions[1].Indicators[3].indicator_detail
        //         },
        //         {
        //             KPI_id: req.body.questions[1].Indicators[4].KPI_id,
        //             indicator_lv: req.body.questions[1].Indicators[4].indicator_lv,
        //             indicator_detail: req.body.questions[1].Indicators[4].indicator_detail
        //         },
        //     ],
        //     InsertTagetToChief: req.body.questions[1].InsertTagetToChief,
        //     start_date: req.body.questions[1].start_date,
        //     end_date: req.body.questions[1].end_date,
        // },
        // {
        //     Template_id: req.body.questions[2].Template_id,
        //     KPI_id: req.body.questions[2].KPI_id,
        //     KPI_Type_id: req.body.questions[2].KPI_Type_id,
        //     KPI_name: req.body.questions[2].KPI_name,
        //     KPI_detail: req.body.questions[2].KPI_detail,
        //     KPI_weight: req.body.questions[2].KPI_weight,
        //     Indicators: [{
        //             KPI_id: req.body.questions[2].Indicators[0].KPI_id,
        //             indicator_lv: req.body.questions[2].Indicators[0].indicator_lv,
        //             indicator_detail: req.body.questions[2].Indicators[0].indicator_detail
        //         },
        //         {
        //             KPI_id: req.body.questions[2].Indicators[1].KPI_id,
        //             indicator_lv: req.body.questions[2].Indicators[1].indicator_lv,
        //             indicator_detail: req.body.questions[2].Indicators[1].indicator_detail
        //         },
        //         {
        //             KPI_id: req.body.questions[2].Indicators[2].KPI_id,
        //             indicator_lv: req.body.questions[2].Indicators[2].indicator_lv,
        //             indicator_detail: req.body.questions[2].Indicators[2].indicator_detail
        //         },
        //         {
        //             KPI_id: req.body.questions[2].Indicators[3].KPI_id,
        //             indicator_lv: req.body.questions[2].Indicators[3].indicator_lv,
        //             indicator_detail: req.body.questions[2].Indicators[3].indicator_detail
        //         },
        //         {
        //             KPI_id: req.body.questions[2].Indicators[4].KPI_id,
        //             indicator_lv: req.body.questions[2].Indicators[4].indicator_lv,
        //             indicator_detail: req.body.questions[2].Indicators[4].indicator_detail
        //         },
        //     ],
        //     InsertTagetToChief: req.body.questions[2].InsertTagetToChief,
        //     start_date: req.body.questions[2].start_date,
        //     end_date: req.body.questions[2].end_date,
        // }
    ]

    // const questions = [{
    //         text: req.body.questions[0].text,
    //         id: req.body.questions[0].id,
    //         Indicators: [{
    //                 id: req.body.questions[0].Indicators[0].id,
    //                 text: req.body.questions[0].Indicators[0].text,
    //                 value: req.body.questions[0].Indicators[0].value
    //             },
    //             {
    //                 id: req.body.questions[0].Indicators[1].id,
    //                 text: req.body.questions[0].Indicators[1].text,
    //                 value: req.body.questions[0].Indicators[1].value
    //             },
    //             {
    //                 id: req.body.questions[0].Indicators[2].id,
    //                 text: req.body.questions[0].Indicators[2].text,
    //                 value: req.body.questions[0].Indicators[2].value
    //             }
    //         ]
    //     },
    //     {
    //         text: req.body.questions[1].text,
    //         id: req.body.questions[1].id,
    //         Indicators: [{
    //                 id: req.body.questions[1].Indicators[0].id,
    //                 text: req.body.questions[1].Indicators[0].text,
    //                 value: req.body.questions[1].Indicators[0].value
    //             },
    //             {
    //                 id: req.body.questions[1].Indicators[1].id,
    //                 text: req.body.questions[1].Indicators[1].text,
    //                 value: req.body.questions[1].Indicators[1].value
    //             },
    //             {
    //                 id: req.body.questions[1].Indicators[2].id,
    //                 text: req.body.questions[1].Indicators[2].text,
    //                 value: req.body.questions[1].Indicators[2].value
    //             }
    //         ]
    //     }
    // ]
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
// router.route('/update/:id').post((req, res) => {
//     Questions.findById(req.params.id)
//         .then(question => {
//             question.kpi_id = req.body.kpi_id;
//             question.kpi_names = req.body.kpi_names;
//             question.questtions = {
//                 kpi_id: req.body.kpi_id,
//                 kpi_names: req.body.kpi_names,
//                 start_date: req.body.start_date,
//                 end_date: req.body.end_date,
//                 Template_id: req.body.Template_id,
//                 Indicators: {
//                     kpi_id: req.body.kpi_id,
//                     indicator_lv: req.body.indicator_lv,
//                     indicator_detail: req.body.indicator_detail
//                 }
//             }

//             question.save()
//                 .then(() => res.json('question updated !!'))
//                 .catch((err) => res.status(400).json('Error ' + err));
//         })
//         .catch((err) => res.status(400).json('Error ' + err));

// });


module.exports = router;