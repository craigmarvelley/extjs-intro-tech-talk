Ext.application({
    name: 'Example 7: Grids',
    launch: function() {
        var grid = this.createGrid();
        var panel = Ext.create('Ext.panel.Panel', {
            region: 'east',
            width: 200,
            title: 'Details'
        });

        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [grid, panel]
        });
    },

    createGrid: function () {
        var store = Ext.create('Ext.data.Store', {
            id: 'todoStore',
            autoLoad: true,
            fields:['title', 'details', 'importance'],
            proxy:{
                type: 'ajax',
                url: 'todos.php',
                reader:{
                    type: 'json',
                    root: 'data',
                    successProperty: 'success',
                    totalProperty: 'total'
                }
            }
        });

        var grid = Ext.create('Ext.grid.Panel', {
            title: 'Todos',
            store: store,
            selType: 'rowmodel',
            region: 'center',
            columns: [
                { text: 'Title',  dataIndex: 'title', flex: 1 },
                { text: 'Importance', dataIndex: 'importance' }
            ],
            listeners: {
                'selectionchange': function (selectionModel, records) {
                    var tpl = new Ext.XTemplate(
                        '<p>Title: {title}</p>',
                        '<p>Details: {details}</p>',
                        '<p>Importance: {importance}</p>'
                    );
                    var panel = this.up('viewport').items.get(1);

                    tpl.overwrite(panel.body, records[0].data);
                }
            }
        });

        return grid;
    }
});
