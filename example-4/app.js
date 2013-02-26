Ext.application({
    name: 'Example 4: Windows',
    launch: function() {
        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'fit'
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'A window',
            height: 200,
            width: 400,
            layout: 'fit',
            items: {
                html: "Here's a panel within a movable window."
            }
        });

        viewport.add(window);

        window.show();
    }
});
