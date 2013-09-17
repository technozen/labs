Ext.define('MyClass', {   // 1
	extends : 'Ext.panel.Panel',  // 2    
	title: 'hello',
	initComponent: function() {   // 3
		var me = this;
		this.callParent(arguements);  // 4
	}
});

var myClass = Ext.create('MyClass', {  // 5
	renderTo : Ext.getBody()
});
