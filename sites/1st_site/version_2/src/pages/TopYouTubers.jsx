import './TopYouTubers.css'

const youtubeVideos = [
  'EECKpAxCvEI',
  'HeD1LeAzbFg',
  'E6FGHHUgJ1g',
  'pdwjz__QwG0',
  'zQF51UTiXD0',
  'RygH2rIIe0s',
  'Ng79zqVXJGI',
  '80BJDysx2gY',
  'KF2YpD8JNvU',
  'NAelWAjUVYI'
]

function TopYouTubers() {
  return (
    <div className="top-youtubers-page">
      <div className="content-wrapper">
        <div className="main-content-area">
          <section className="videos-section">
            <h2>Топ ютуберы по роялю</h2>
            <div className="videos-grid">
              {youtubeVideos.map((videoId, index) => (
                <div key={index} className="video-item">
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TopYouTubers
