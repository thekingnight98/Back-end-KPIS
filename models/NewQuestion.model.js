const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewQuestionSchema = new Schema({
    Template_id: { type: Number, required: true },
    Template_name: { type: String, required: true },
    questions: [{
        Template_id: { type: Number, ref: 'Template_id' },
        KPI_id: { type: Schema.Types.ObjectId }, // id ของคำถาม
        KPI_Type_id: { type: Number, required: true }, // type ของคำถาม
        KPI_name: { type: String, required: true }, // ชื่อคำถาม
        KPI_detail: { type: String, required: true }, //ตัวชี้วัดผลการปฎิบัติงาน
        KPI_weight: { type: Number, required: true }, // ความสำคัญของคำถาม
        // Indicators: [{
        //     KPI_id: { type: Schema.Types.ObjectId }, //or number
        //     indicator_lv: { type: Number, required: true },
        //     indicator_detail: { type: String, required: true },
        // }],
        Indicators: { type: Array, required: true },
        InsertTagetToChief: { type: Number, required: true }, //เป้าหมายที่สอดคล้อง
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
    }],
});
const Questions = mongoose.model('NewQuestion', NewQuestionSchema);
module.exports = Questions;