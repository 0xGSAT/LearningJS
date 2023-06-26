export let courseName = "Angular"; 
let course = {getCourseName:function(){ return courseName;}, 
	setCourseName:function(newCourseName){ courseName =newCourseName; } 
}; 
 
export default course;
