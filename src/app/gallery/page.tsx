
import Upload from './upload';
import cloudinary from 'cloudinary';
import View from './view';

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

interface MyImages {
  public_id:string
}
const Page = async () => {
  const res = await cloudinary.v2.search
      .expression('resource_type:image')
      .sort_by('public_id', 'desc')
      // .max_results(5)
      .execute() as {resources:MyImages[]};


  return (
 <>   <div className='py-4 px-5 flex items-center justify-between'>
      <h2 className='text-3xl font-semibold tracking-tight'>Gallery</h2>
      <Upload />
      
    </div>
    <div className='grid grid-cols-4 gap-4 p-3'>
      
{res.resources.map((items,i)=>{
  return <div key={i}>
ِ<View src={items.public_id} />
 
  </div>

})}

    </div>
    </>);
};

export default Page;
