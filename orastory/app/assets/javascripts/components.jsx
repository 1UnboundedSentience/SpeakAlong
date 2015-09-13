//= require_tree ./components
console.log('videos file')
var VIDEOS = [
        {title: 'Sherif Talking',
        videoID: '8ONf8SXbGZ4'},
        {title: 'Cat Video',
        videoID: 'tntOCGkgt98'}
      ]
      var SearchBar = React.createClass({
        wumpus: function() {
          this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value
          )
        },
        render: function() {
            return (
                <form>
                  <input
                    type="text"
                    placeholder="Search..."
                    ref = "filterTextInput" //refering to filterTextInput
                    onChange = {this.wumpus} />
                </form>
            );
        }
      });

      var VideoRow = React.createClass({
        render: function() {
            ytLink = 'https://www.youtube.com/embed/' + this.props.video.videoID
            return (
                <tr>
                    <td>{this.props.video.title}</td>
                    <td><iframe width="560" height="315" src={ytLink} frameBorder="0" allowFullScreen></iframe></td>
                </tr>
                );
            }
        });



      var VideoTable = React.createClass({
        render: function() {
          var rows = [];
          console.log(this.props)
          var filterText = this.props.filterText;
          this.props.videos.forEach(function(video) {
              if (video.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) { return;}
              rows.push(<VideoRow video={video} key={video.name} />);
          }.bind(this));
          return (
              <table>
                  <tbody>{rows}</tbody>
              </table>
          );
        }
      });

      var FilterableVideoTable = React.createClass({
        handleUserInput: function(wumpus) {
          this.setState({
            filterText: wumpus
          })
        },
        getInitialState: function() {
          return {filterText: '',
                  videos: VIDEOS
                }
        },
        render: function() {
            console.log('videos file')
            console.log(this.state)
            //console.log(this.props)
            return (
                <div>
                    <SearchBar
                      filterText={this.state.filterText}
                      onUserInput={this.handleUserInput} />
                    <VideoTable videos={this.state.videos}

                      filterText={this.state.filterText} />
                </div>
            );
        },
        componentDidMount: function() {
          $.get(this.props.source, function(result) {

          })
        }
      });
    React.render(<FilterableVideoTable />, document.footer);
