require(['gitbook', 'jquery'], function(gitbook, $) {
    var SITES = {
        'github': {
            'label': '   GitHub',
            'icon': 'fab fa-github',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://github.com/LuisFajardoF');
            }
        },
        'telegram': {
            'label': 'Telegram',
            'icon': 'fab fa-telegram', 
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://t.me/luis96791');
            }
        },
        'drive': {
            'label': 'Drive',
            'icon': 'fab fa-google-drive', 
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://drive.google.com/drive/folders/1wTUhL7A_du4tEzAGAipMlLb4aL4DkbmL?usp=sharing');
            }
        }
    };



    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Create dropdown menu
        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        // Create main button with dropdown
        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: menu
            });
        }

        // Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
