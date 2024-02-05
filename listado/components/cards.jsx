import Card from './card'

function Cards(){
    return (
        <div className='container align-items-center justify-content-center'>
            <div className='row'>
               <div className='col-md-4'>
                    <Card/>
                </div>    
                <div className='col-md-4'>
                    <Card/>
                </div>  
                <div className='col-md-4'>
                    <Card/>
                </div>  
                <div className='col-md-4'>
                    <Card/>
                </div>  
                <div className='col-md-4'>
                    <Card/>
                </div>  
                <div className='col-md-4'>
                    <Card/>
                </div>  
                
                </div>
        </div>
    )
}

export default Cards