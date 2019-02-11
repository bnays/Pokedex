const students = [
	{
		'id' : '1',
		'name' : 'binay',
		'designation' :  ['developer', 'AWD'],
		'selected' : false
	},
	{
		'id' : '2',
		'name' : 'shrijan',
		'designation' :  ['student'],
		'selected' : false
	},
	{
		'id' : '3',
		'name' : 'runa',
		'designation' :  ['lawyer'],
		'selected' : false
	},
]

export default {
	  getStudents(){
			return students;  	
	  }
  }