const pageHandler = (page = {'search' : '', 'restrict' : ''}, action) => {
    switch(action.type){
        case 'CURRENT_PAGE' : return action.payload;
        default : return page;
    }
}

export default pageHandler;