Ext.application({
    name: 'Example 5: Toolbars',
    launch: function() {
        var increment = 100;

        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                tbar: [
                    {
                        xtype: 'button',
                        text: 'Button 1',
                        handler: function () {
                            increment += 10;

                            this.createWindow(viewport, increment, increment);
                        },
                        scope: this
                    }
                ]
            }
        });


    },

    createWindow: function (viewport, x, y) {
        x = x || 100;
        y = y || 100;

        var window = Ext.create('Ext.window.Window', {
            title: 'A window',
            height: 200,
            width: 400,
            layout: 'fit',
            x: x,
            y: y,
            items: {
                html: "Here's a panel within a movable window."
            }
        });

        viewport.add(window);

        window.show();
    }
});
