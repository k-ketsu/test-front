
const TheURL = "https://test2-production-ae19.up.railway.app"
const Age = document.getElementById("AddAge").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
})
document.getElementById("TestForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("AddName")
    const Age = document.getElementById("AddAge")
    if (name.value == "" || Age.value == null) {
        console.log("nothing To input")
    }
    else {
        const ReqData = {
            NewName: name.value,
            NewAge: Age.value
        }
        const req = await fetch(TheURL + "/AddNew", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ReqData)
        })
        const res = await req.json()
        if(res.status == "ok"){
            console.log("done")
        }
        else{
            console.log("something went wrong")
        }
        
    }


})