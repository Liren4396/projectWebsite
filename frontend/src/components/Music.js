import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import './Music.css';

const Music = () => {
  const { language } = useLanguage();
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // 音乐列表 - 这里是你的所有歌曲
  const songs = [
    'A-Lin - 給我一個理由忘記.mp3',
    'A-Mei Chang - 剪愛.mp3',
    'AMBER, TAEYEON - SHAKE THAT BRASS (feat. Taeyeon).mp3',
    'BIGBANG - LET\'S NOT FALL IN LOVE.mp3',
    'BIGBANG - Lies.mp3',
    'Chris Lee Artiste - 下個，路口，見.mp3',
    'Chris Lee Artiste - 蜀绣.mp3',
    'Christine Fan, Angela Chang - 如果的事.mp3',
    'Claire Kuo - 下一個天亮.mp3',
    'Claire Kuo - 心牆.mp3',
    'Cyndi Wang - 大眠.mp3',
    'Cyndi Wang - 當你.mp3',
    'David Tao - 小鎮姑娘.mp3',
    'Della - 猜不透.mp3',
    'Deserts Chang - 寶貝 (In a Day).mp3',
    'Eason Chan - 你的背包.mp3',
    'Eason Chan - 富士山下.mp3',
    'Eric Chou - 怎麼了.mp3',
    'EXO - Baby, Don\'t Cry.mp3',
    'F.I.R. - Lydia.mp3',
    'F.I.R. - 千年之戀.mp3',
    'Fahrenheit - Only Have Feelings For You.mp3',
    'Fiona Sit - 復刻回憶.mp3',
    'Fiona Sit - 慕容雪.mp3',
    'Fish Leong - 暖暖.mp3',
    'G.E.M. - 光年之外 (電影 《Passengers》 中國區主題曲).mp3',
    'G.E.M. - 句號.mp3',
    'G.E.M. - 泡沫.mp3',
    'Jane Zhang - 如果这就是爱情.mp3',
    'Jane Zhang - 画心 (《画皮》电影主题曲).mp3',
    'Jason Zhang - 天下.mp3',
    'Jason Zhang - 这，就是爱.mp3',
    'Jay Chou - 半島鐵盒.mp3',
    'Jay Chou - 好久不見.mp3',
    'Jay Chou - 斷了的弦.mp3',
    'Jay Chou - 給我一首歌的時間.mp3',
    'JAY\'ED, Ms.OOJA - また君と.mp3',
    'Jeff Chang - 太想愛你.mp3',
    'Jin Hai Xin - 爱似水仙.mp3',
    'Jin Hai Xin - 陽光下的星星.mp3',
    'Jin Wenqi - 姗姗.mp3',
    'Jin Wenqi - 爱呀.mp3',
    'JJ Lin - 光陰副本.mp3',
    'JJ Lin - 對的時間點.mp3',
    'JJ Lin, 金莎 - 被風吹過的夏天.mp3',
    'Joker Xue - 认真的雪.mp3',
    'JOLIN - 看我72變.mp3',
    'JOLIN - 說愛你.mp3',
    'JOLIN, 陶喆 - 今天妳要嫁給我.mp3',
    'Khalil Fong - 紅豆.mp3',
    'Khalil Fong - 黑白.mp3',
    'LaLa Hsu - 一樣的月光.mp3',
    'LaLa Hsu - 行走的鱼.mp3',
    'Landy Wen, Jay Chou - 屋頂.mp3',
    'Leehom Wang - 大城小愛.mp3',
    'Leehom Wang - 我們的歌.mp3',
    'Lily, Sayonara. - 約束.mp3',
    'Mao Buyi - 盛夏.mp3',
    'Mayday - 乾杯.mp3',
    'Mrs. GREEN APPLE - インフェルノ.mp3',
    'Mrs. GREEN APPLE - ダンスホール.mp3',
    'Nana Ou-Yang - 星期一先打开星座运势.mp3',
    'Nicky Lee - 圍牆.mp3',
    'Nicky Lee - 夏天.mp3',
    'Rainie Yang - 匿名的好友.mp3',
    'S.H.E - 独唱情歌.mp3',
    'Sasablue - 恋爱频率.mp3',
    'Silence Wang - 小星星.mp3',
    'Silence Wang - 等不到你.mp3',
    'Silence Wang, BY2 - 有点甜.mp3',
    'sodagreen, Ella Chen - 你被寫在我的歌裡.mp3',
    'Stefanie Sun - 眼淚成詩.mp3',
    'Stefanie Sun - 綠光.mp3',
    'TANK 呂建忠 - If I were be the memory.mp3',
    'TANK 呂建忠 - Personal Angel.mp3',
    'Tracy Wang - 不枉.mp3',
    'Wuthering Waves, jixwang, VISION SOUND - Dancing Through Fantasies.mp3',
    'Z-Chen - 末日之戀.mp3',
    'Zhang Zhen Yue, 蔡健雅 - 思念是一種病.mp3',
    '乐正绫 - 繁华唱遍.mp3',
    '卓文萱, Gary Chaw - 梁山伯與茱麗葉.mp3',
    '印子月 - 落空.mp3',
    '后弦 - 单车恋人.mp3',
    '單依純 - 像风一样 - Live.mp3',
    '廖俊濤 - 車站.mp3',
    '张含韵, 蓝心羽 - 丹青墨绿.mp3',
    '後弦 - 苏州城外的微笑.mp3',
    '徐良 - 那时雨.mp3',
    '徐良, 小凌 - 坏女孩 - Remix版.mp3',
    '星弟 - 我會很誠實.mp3',
    '朴冉, 姜云升 - 不后悔遇见你.mp3',
    '李行亮 - 愿得一人心（电视剧《最美的时光》主题曲）.mp3',
    '盛哲 - 在你的身邊.mp3',
    '許嵩 - 如約而至.mp3',
    '許嵩 - 我想牽著你的手.mp3',
    '許嵩 - 有何不可.mp3',
    '許嵩 - 粉色信笺.mp3',
    '鐘易軒, 廖俊濤 - I Will Miss You - Live.mp3',
    '陈冰, 金志文 - 肩上蝶 - Live.mp3',
    '陳蘿莉 - 初戀薛凱琪.mp3'
  ];

  // 过滤歌曲
  const filteredSongs = songs.filter(song => 
    song.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [currentSong]);

  const playSong = (song) => {
    if (currentSong === song && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentSong !== song) {
        setCurrentSong(song);
        audioRef.current.src = `/music/${song}`;
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const getSongTitle = (filename) => {
    return filename.replace('.mp3', '');
  };

  return (
    <div className="music-container">
      <div className="music-header">
        <h1>{language === 'en' ? 'My Music Collection' : '我的音乐收藏'}</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder={language === 'en' ? 'Search songs...' : '搜索歌曲...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {currentSong && (
        <div className="now-playing">
          <h3>{language === 'en' ? 'Now Playing:' : '正在播放:'}</h3>
          <div className="current-song-info">
            <div className="song-title">{getSongTitle(currentSong)}</div>
            <div className="progress-container">
              <span className="time">{formatTime(currentTime)}</span>
              <input
                type="range"
                className="progress-bar"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleProgressChange}
              />
              <span className="time">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      )}

      <div className="playlist">
        <h3>{language === 'en' ? 'Playlist' : '播放列表'} ({filteredSongs.length} {language === 'en' ? 'songs' : '首歌曲'})</h3>
        <div className="song-list">
          {filteredSongs.map((song, index) => (
            <div
              key={index}
              className={`song-item ${currentSong === song ? 'active' : ''}`}
              onClick={() => playSong(song)}
            >
              <div className="song-info">
                <div className="song-title">{getSongTitle(song)}</div>
              </div>
              <div className="play-button">
                {currentSong === song && isPlaying ? '⏸️' : '▶️'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default Music; 