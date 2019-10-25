$(function () {
    $.ajax({
        /**Galgame music playlist by PurionPurion http://music.163.com/#/playlist?id=878498021**/
        url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=879840820',
        success: function (list) {
            var ap = new APlayer({
                element: document.getElementById('aplayer5'),
                showlrc: 3,
                theme: '#ff69b4',
                listmaxheight: '280px',
                mode: 'random',
                music: JSON.parse(list)
            });
            window.aplayers || (window.aplayers = []);
            window.aplayers.push(ap);
        }
    })
})
