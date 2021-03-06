---
---
var pwp_metadata = {};
var defaultData = {
  sources: [
    {
      src: "{{site.dist}}/examples/which-format/podlove-test-track.mp4",
      type: "audio/mp4"
    },
    {
      src:"{{site.dist}}/examples/which-format/podlove-test-track.mp3",
      type:"audio/mpeg"
    },
    {
      src:"{{site.dist}}/examples/which-format/podlove-test-track.ogg",
      type:"audio/ogg; codecs=vorbis"
    },
    {
      src:"{{site.dist}}/examples/which-format/podlove-test-track.opus",
      type:"audio/ogg; codecs=opus"
    }
  ],
  poster: '{{site.dist}}/examples/coverimage.png',
  title: 'PWP001 - Which format plays?',
  permalink: '{{site.dist}}/examples/which-format/index.html',
  subtitle: 'The Format your client chooses to play first will be told when you play this track.',
  publicationDate: '2004-02-12T15:19:21+00:00',
  "license": {
    "name": "Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Germany License",
    "url": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/3.0\/de\/deed.en"
  },
  chapters: [
    {
      start: '00:00:00.000',
      title: 'Chapter One'
    },
    {
      start: '00:00:00.500',
      title: 'Chapter Two',
      image: '{{site.dist}}/examples/coverimage-red.png'
    },
    {
      start: '00:00:01.500',
      title: 'Chapter Three',
      image: '{{site.dist}}/examples/coverimage-green.png',
      href: 'http://wordpress.org/plugins/podlove-podcasting-plugin-for-wordpress/'
    },
    {
      start: '00:00:02.000',
      title: 'Chapter Four',
      href: 'http://metaebene.me/'
    }
  ],
  summary: '<p>Summary and even links <a href="https://github.com/podlove/podlove-web-player">Podlove Web Player</a>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna.</p><p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>',
  downloads: [{
    name: 'MP3', size: 58725,
    url: '{{site.dist}}/example/which-format/podlove-test-track.mp3',
    dlurl: '{{site.dist}}/example/which-format/podlove-test-track.mp3'
  }, {
    name: 'ogg', size: 50494,
    url: '{{site.dist}}/example/which-format/podlove-test-track.ogg',
    dlurl: '{{site.dist}}/example/which-format/podlove-test-track.mp3'
  }, {
    name: 'MP4', size: 78328,
    url: '{{site.dist}}/example/which-format/podlove-test-track.mp4',
    dlurl: '{{site.dist}}/example/which-format/podlove-test-track.mp4'
  }, {
    name: 'opus', size: 37314,
    url: '{{site.dist}}/examples/which-format/podlove-test-track.opus',
    dlurl: '{{site.dist}}/example/which-format/podlove-test-track.opus'
  }],
  show: {
    title: 'PWP - The Podlove Web Player',
    subtitle: 'HTML5 Goodness for Podcasts',
    summary: 'Even more text about this player and its advantages...',
    poster: '{{site.dist}}/examples/coverimage.png',
    url: 'http://docs.podlove.org'
  },
  duration: '00:02.902',
  alwaysShowHours: true,
  width: 'auto'
};

var editor = ace.edit("editor");
editor.$blockScrolling = Infinity;
editor.setTheme("ace/theme/twilight");

var session = editor.getSession()

var wrapper = $('#player');

session.setMode("ace/mode/json");
session.on('change', function() {
  try {
    var v = session.getValue();
    var j = JSON.parse(v);
    wrapper.empty();

    pwp_metadata['player'] = j;
    var e = $('<div id="player">');
    wrapper.append(e);

    e.podlovewebplayer({staticEmbedPage:'{{site.dist}}/static.html'});
    console.log(e);
  }
  catch (e) {
    console.error(e);
  }
});

function getData() {
  var data = location.search.split('gist=')[1];
  if (!data) {
    initPlayerWith(defaultData);
  }
  $.get('https://api.github.com/gists/' + data, initPlayerWith);
}
function initPlayerWith(metaData) {
  if (!'config.json' in metaData.files) {
    console.error('no config.json found in gist');
  }
  try {
    for(var fileId in metaData.files) {
      console.log(fileId);
      var content = JSON.parse(metaData.files[fileId].content);
      session.setValue(JSON.stringify(content, null, '\t'));
    }
  }
  catch (e) {
    console.error(e);
  }
}
getData();

