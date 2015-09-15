//= require_tree ./components

var VIDEOS = [
        {title: 'Schlieffen',
        videoID: '4jNjJueYnLI'},
        {title: 'Simulation Hypothesis',
        videoID: 'dqVrIBkhqOo'}
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
            var ytLink = this.props.video.video_link
            var ytLink = ytLink.replace("watch?v=", "v/");
            console.log(ytLink)
            return (
                <tr>
                    <td>Video Title: {this.props.video.title}</td>
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

// //= require_tree ./components
// //console.log($('div[data-react-class="Videos"]'))
// var VIDEOS = [
//         {title: 'Best Ted Talks',
//         videoID: '4vl6wCiUZYc'},
//         {title: 'Addiction every you about addiction is wrong',
//         videoID: 'PY9DcIMGxMs'}
//       ]
// var SearchBar = React.createClass({
//   wumpus: function() {
//     this.props.onUserInput(
//       this.refs.filterTextInput.getDOMNode().value
//     )
//   },
//   render: function() {
//       return (
//           <form>
//             <input
//               type="text"
//               placeholder="Search..."
//               ref = "filterTextInput" //refering to filterTextInput
//               onChange = {this.wumpus} />
//           </form>
//       );
//   }
// });

// var VideoRow = React.createClass({
//   render: function() {
//       console.log(this.props)
//       console.log(this.props.video.video_link)
//       ytLink = this.props.video.video_link
//       return (
//           <tr>
//               <td>{this.props.video.title}</td>
//               <td><iframe width="560" height="315" src={'http://www.youtube.com/embed/j6cxZp4ii6c?autoplay=true'} frameBorder="0" allowFullScreen></iframe></td>
//           </tr>
//           );
//       }
//   });



// var VideoTable = React.createClass({
//   render: function() {
//     var rows = [];
//     console.log(this.props)
//     console.log(this.props.videos)
//     var filterText = this.props.filterText;
//     // this.props.videos.forEach(function(video) {
//     //     if (video.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) { return;}
//     //     rows.push(<VideoRow video={video} key={video.name} />);
//     // }.bind(this));
//     for(var key in this.props.videos) {
//         console.log(key)
//         if (this.props.videos[key].title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) { return;}
//         rows.push(<VideoRow video={this.props.videos[key]} />);
//     }
//     return (
//         <table>
//             <tbody>{rows}</tbody>
//         </table>
//     );
//   }
// });

// var FilterableVideoTable = React.createClass({
//   handleUserInput: function(wumpus) {
//     this.setState({
//       filterText: wumpus
//     })
//   },
//   getInitialState: function() {
//     console.log(this.props)
//     return {filterText: '',
//             videos: this.props
//           }
//   },
//   render: function() {
//       console.log('videos file render')
//       console.log(this.state)
//       // console.log(this.props)
//       console.log(this.props)
//       return (
//           <div>
//               <SearchBar
//                 filterText={this.state.filterText}
//                 onUserInput={this.handleUserInput} />
//               <VideoTable videos={this.state.videos}

//                 filterText={this.state.filterText} />
//           </div>
//       );
//   },
//   componentDidMount: function() {
//     $.get(this.props.source, function(result) {

//     })
//   }
// });
// React.render(<FilterableVideoTable />, document.footer);
