//= require_tree ./components
      var SearchBar = React.createClass({
        getFilteredText: function() {
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
                    onChange = {this.getFilteredText} />
                </form>
            );
        }
      });

      var VideoRow = React.createClass({
        render: function() {
            var ytLink = this.props.video.video_link
            var ytLink = ytLink.replace("watch?v=", "v/");
            var ytCodeID= 'http://img.youtube.com/vi/' + ytLink.split('/v/')[1] + '/1.jpg';
            debugger
            return (
                <tr>
                    <td></td>
                    <td>Video Title: {this.props.video.title}
                      <a href="/users/25/videos/2">Practice!</a>
                      <a href="/users/25/videos/2/edit">Edit</a>
                    </td> <br></br>
                    <td><img src={ytCodeID}></img></td>

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
              else if (this.props.filterText === "") {return ;}
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
        handleUserInput: function(getFilteredText) {
          this.setState({
            filterText: getFilteredText
          })
        },
        getInitialState: function() {
          userVids = []
          for (var key in this.props) {
              userVids.push(this.props[key]);
          }
          return {filterText: '',
                  videos: userVids
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
                    <VideoTable
                      videos={this.state.videos}
                      filterText={this.state.filterText} />
                </div>
            );
        },
        componentDidMount: function() {
          $.get(this.props.source, function(result) {

          })
        }
      });
    React.render(<FilterableVideoTable />, document.header);

