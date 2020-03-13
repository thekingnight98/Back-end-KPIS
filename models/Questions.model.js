const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const IndicatorsSchema = new Schema({
//     kpi_id: { type: Number, required: true },
//     indicator_lv: { type: Number, required: true },
//     indicator_detail: { type: String, required: true }
// })
const questionschema = new Schema({
    kpi_id: { type: Number, required: true },
    kpi_names: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    Template_id: { type: Number, required: true },
    // Indicators: {
    //     type: IndicatorsSchema
    // }
    Indicators: {
        type: Array,
        required: true
    }
});
// const TemplateId = new QuestionSchema();
// TemplateId

const QuestionSchema = new Schema({
    Template_id: { type: Number, required: true },
    Template_name: { type: String, required: true },
    questions: {
        type: [questionschema]
    }
});

const Questions = mongoose.model('Question', QuestionSchema);
module.exports = Questions;