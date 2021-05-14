const PageHandler = (pageData = 0, action) =>{
    switch(action.type){
        case 'CURRENT_PAGE' : return action.payload;
        default : return pageData;
    }
}

export default PageHandler;