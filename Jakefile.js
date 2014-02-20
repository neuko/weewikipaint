//// script covering tests using Jake
//
//desc("")
//task ("default", [], function() {
//   console.log("default");
//});
//
//desc("example");
//task("example", ["dependency"], function () {
//   console.log("example task");
//});
//
//task("dependency", function() {
//    console.log("dependency");
//});


desc("default");
task("default", ["Anotherdependency", "dependency"], function () {
    console.log("default");
});

desc("dependency");
task("dependency", [], function () {
   console.log("dependency");
});

desc("Anotherdependency");
task("Anotherdependency", [], function () {
    console.log("Anotherdependency");
});
