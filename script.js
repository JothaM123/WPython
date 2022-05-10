var py



function get() { 
    firebase.database().ref("/" + document.getElementById("email").value+"/code").on("value", function (val) { 
        document.getElementById("code").value=val.val()
    })
}

function run() {
    firebase.database().ref("/" + document.getElementById("email").value).update({
        code: document.getElementById("code").value,
    });
    
}

console.log = function (string) { 
    document.getElementById("logs").innerHTML = document.getElementById("logs").innerHTML+string+"<br>"
}

console.clear = function () { 
    document.getElementById("logs").innerHTML = ""
}


async function python() { 
    py = await loadPyodide();
    console.clear()
    
}

python()


function runpy() { 
    
    py.runPython(document.getElementById("code").value)

}

