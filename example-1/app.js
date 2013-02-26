Ext.application({
    name: 'Example 1: Panels',
    launch: function() {
        Ext.create('Ext.panel.Panel', {
            title: 'A panel',
            width: 400,
            padding: 40,
            html: '<p>Panels are components that can contain other components</p>',
            renderTo: Ext.getBody()
        });
    }
});
