function chartmaker(list) {
    document.write("<style>table, th, td { border: 1px solid black;} th{background:cornflowerblue} </style>")
    document.write("<table>")
    document.write("<tr>")
    document.write("<th> X </th>")
    document.write("<th> Op </th>")
    document.write("<th> Y </th>")
    document.write("<th>Result</th>")
    document.write("</tr>")

    //final table variables
    let results = [];


    for (let i = 0; i < list.length; i++) {
        let x = list[i]
        let op = list[i + 1]
        let y = list[i + 2]
        let result;

        if (isNaN(x) || isNaN(y)) {
            result = "Wrong input number"
        } else if (op == "+") {
            result = +x + +y
            results.push(result)
        } else if (op == "-") {
            result = +x - +y
            results.push(result)
        } else if (op == "*") {
            result = +x * +y
            results.push(result)
        } else if (op == "/"){
            result = +x / +y
            results.push(result)
        } else if (op == "%"){
            result = +x % +y
            results.push(result)
        } else {
            result = "Computation error"
        }
        document.write("<tr>")
        document.write("<td>" + x + "</td>")
        document.write("<td style='background: lightblue'>" + op + "</td>")
        document.write("<td>" + y + "</td>")
        document.write("<td>" + result + "</td>")
        document.write("</tr>")
        i += 2

    }
    document.write("</table><br><br>")
    document.write("<table>")
    document.write("<style>table, th, td { border: 1px solid black;} th{background:cornflowerblue} </style>")
    document.write("<tr>")
    document.write("<th> Min </th>")
    document.write("<th> Max </th>")
    document.write("<th> Average </th>")
    document.write("<th>Total</th>")
    document.write("</tr>")

    let min = 99999999
    let max = -9999999
    let total = 0;
    for (let j = 0; j < results.length; j++){
        if (results[j] > max){
            max = results[j]
        }
        if (results[j] < min) {
            min = results[j]
        }
        total += results[j]

    }
    let average = total / results.length


    document.write("<tr>")
    document.write("<td>" + min.toFixed(2) + "</td>")
    document.write("<td>" + max.toFixed(2) + "</td>")
    document.write("<td>" + average.toFixed(2) + "</td>")
    document.write("<td>" + total.toFixed(2) + "</td>")
    document.write("</tr>")
    document.write("</table>")


}