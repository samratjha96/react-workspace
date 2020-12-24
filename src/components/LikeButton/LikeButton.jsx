import './LikeButton.css';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false }
    }

    toggleLike = () => {
        this.setState({ liked: !this.state.liked  });
    }
    render() { 
        return ( <div className="like_button_container">
            <button className="likebtn">
                <i className="fas fa-heart fa-lg" style={{ color: "white" }}></i>
            </button>
        </div> );
    }
}
 
export default LikeButton;