import mongoose from "mongoose"

interface Todo{
    title : string;
    description : string;
}

interface TodoDocument extends mongoose.Document{
    title : string;
    description : string;
}

const todoSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,        
    },
    description : {
        type: String,
        required: true,        
    },
})

interface todoModelInterface extends mongoose.Model<TodoDocument>{
    set(x: Todo) : TodoDocument;
}

todoSchema.statics.set = (x : Todo) => {
    return new Todo();
};

const Todo = mongoose.model<TodoDocument, todoModelInterface>(
    "Todo",
    todoSchema,
)

Todo.set({
    title: "Some Title",
    description: "Some Description",
});

export { Todo };