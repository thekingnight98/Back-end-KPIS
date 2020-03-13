const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const questionschema = new Schema({
//     Template_id: { type: Number, required: true }, // มากจาก template id ไหน
//     KPI_id: { type: Number, required: true }, // id ของคำถาม
//     KPI_Type_id: { type: Number, required: true }, // type ของคำถาม
//     KPI_name: { type: String, required: true }, // ชื่อคำถาม
//     KPI_detail: { type: String, required: true }, //ตัวชี้วัดผลการปฎิบัติงาน
//     KPI_weight: { type: Number, required: true }, // ความสำคัญของคำถาม
//     Indicators: {
//         // ระดับการประเมิณ ตาม level
//         type: Array,
//         required: true
//     },
//     InsertTagetToChief: { type: String, required: true }, //เป้าหมายที่สอดคล้อง
//     start_date: { type: Date, required: true },
//     end_date: { type: Date, required: true },
// });

const QuestionSchema = new Schema({
    Template_id: { type: Number, required: true },
    Template_name: { type: String, required: true }, // ผลสัมฤทธิ์ที่คาดหวัง
    questions: [{
            Template_id: { type: Number, required: true }, // มากจาก template id ไหน
            KPI_id: { type: Number, required: true }, // id ของคำถาม
            KPI_Type_id: { type: Number, required: true }, // type ของคำถาม
            KPI_name: { type: String, required: true }, // ชื่อคำถาม
            KPI_detail: { type: String, required: true }, //ตัวชี้วัดผลการปฎิบัติงาน
            KPI_weight: { type: Number, required: true }, // ความสำคัญของคำถาม
            Indicators: [{
                KPI_id: { type: Number, required: true }, //or number
                indicator_lv: { type: Number, required: true },
                indicator_detail: { type: String, required: true },
            }],
            InsertTagetToChief: { type: String, required: true }, //เป้าหมายที่สอดคล้อง
            start_date: { type: Date, required: true },
            end_date: { type: Date, required: true },
        }]
        // questions: [{
        //     text: { type: String, required: true },
        //     id: { type: String, required: true }, //or number
        //     Indicators: [{
        //         id: { type: String, required: true }, //or number
        //         text: { type: String, required: true },
        //         value: { type: String, required: true },
        //     }]
        // }]
});

const Questions = mongoose.model('Question', QuestionSchema);
module.exports = Questions;