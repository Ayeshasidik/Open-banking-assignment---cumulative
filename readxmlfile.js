var fs = require('fs'), 
    parseString = require('xml2js').parseString,
        xml2js = require('xml2js');

fs.readFile('Test.xml', 'utf-8', function (err,data){
    if(err) console.log(err);

    //print the read file results
    console.log(data);    

    //Pass the read file data to our method parseString
    parseString(data,function(err,result){
        if(err) console.log(err);

        //Print the xml string conversion data. It prints newly created Json Object
        console.log(result);

        //Editing our new JSon Object
          //Save our Json Object to variable json
        var json=result;

        //Edit the name and set to  Wipro Ltd
        var result = json.root.graph[0].node[0].name = "Wipro Ltd";
        //prints the edited json result
        console.log(result);

        //convert the json to xml and prints the xml
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);
        console.log(xml);

        //Now write a converted name to a Test.xml file
        fs.writeFile('edited-test.xml', xml, function(data,err){
        if(err) console.log(err);
        console.log("successfully written our update xml to file");
        });
    });
}); 