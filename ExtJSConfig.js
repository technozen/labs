Ext.define('RiaApp.ClassRoom', {
	config : {   // 1
		grade : '미정',
		className : '미정',
		teacher : '미정'
	},
	constructor : function(grade, className, teacher) { // 2
		this.initConfig();
		if (grade)
			this.setGrade(grade);
		// or
		
		if (className)
			this.setClassName(className);
		if (teacher)
			this.setTeacher(teacher);
	},
	getString: function() { // 3
		return ' - 교실정보 -\n학년 : ' + this.getGrade() + '\n반명 : ' + this.getClassName() + '\n담임 : ' + this.getTeacher();
	}
}, function() {
	console.log('RiaApp.ClassRoom class가 정의 됐음!');
});

var classroom = Ext.create('RiaApp.ClassRoom', '2', 'ExtJS배워보기', '홍길동');
console.log(classroom.getString());
