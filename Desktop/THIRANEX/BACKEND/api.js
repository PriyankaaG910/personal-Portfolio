router.get("/projects",(req,res)=>{

    const projects = [
        {
            title:"Portfolio Website",
            tech:"React, Node.js"
        },
        {
            title:"AI Chatbot",
            tech:"Python, Flask"
        }
    ];

    res.json(projects);
});