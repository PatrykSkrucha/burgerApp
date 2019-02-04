import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state={
            error:null
        }
        componentWillMount(){
            
            this.reqIntercept=axios.interceptors.request.use(req=>{
                this.setState({
                    error:null
                });
                return req;
            })
            this.resIntercept=axios.interceptors.response.use(res=>res,error=>{
                this.setState({
                    error:error
                })
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqIntercept)
            axios.interceptors.reponse.eject(this.resIntercept)
        }
        clickHandler = () =>{
            this.setState({
                error:null
            })
        }

        render(){
            return (
               <>
                    <Modal
                        show={this.state.error}
                        clicked={this.clickHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </> 
            )
        }
    } 
}
export default withErrorHandler;