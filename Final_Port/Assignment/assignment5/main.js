
function postFunction () 
{
    var inputText = document.getElementById("text1").value;
    var outputTopic1 = document.getElementById("topic1");
    var outputComment1 = document.getElementById("comment1");
    var outputComment2 = document.getElementById("comment2");
    var outputText = inputText;
if (outputTopic1.innerHTML == "")
{
    outputTopic1.innerHTML = outputText;
}
else if (outputComment1.innerHTML == "")
{
    outputComment1.innerHTML = outputText;
}
else if (outputComment2.innerHTML == "")
{
    outputComment2.innerHTML = outputText;
}
}

function clearFunction ()
{
    var outputTopic1 = document.getElementById("topic1");
    var outputComment1 = document.getElementById("comment1");
    var outputComment2 = document.getElementById("comment2");
    outputTopic1.innerHTML = "";
    outputComment1.innerHTML = "";
    outputComment2.innerHTML = "";
}