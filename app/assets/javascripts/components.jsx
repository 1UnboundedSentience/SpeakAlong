//= require_tree ./components
//var currentRouteName = this.context.router.getCurrentPathname();
//this.context.router.transitionTo(currentRouteName, {lang: 'en'});
//SearchBar receives all user input
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
//displays a row for each video
      var VideoRow = React.createClass({
        render: function() {
            //var currentRouteName = this.context.router.getCurrentPathname();
            var ytLink = this.props.video.video_link
            var ytLink = ytLink.replace("watch?v=", "v/");
            var ytCodeID= 'http://img.youtube.com/vi/' + ytLink.split('/v/')[1] + '/1.jpg';
            var videoID = this.props.video.id
            return (
                <tr>
                    <td></td>
                    <td>Video Title: {this.props.video.title}

                    </td> <br></br>
                    <td><img src={ytCodeID}></img></td>

                </tr>
                );
            }
        });

//displays and filters the data collection based on user input
      var VideoTable = React.createClass({
        render: function() {
          var rows = [];
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
//contains entire search bar & videos
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
                  videos: userVids,
                  //links: userLinks;
                }
        },
        render: function() {
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