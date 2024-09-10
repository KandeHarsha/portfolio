import Image from 'next/image';

export default function AboutPage(){
  return(
    <div>
      <Image
        src="/profile.jpg" // Path relative to the public directory
        alt="Profile picture"
        width={500}  // Set the width of the image
        height={300} // Set the height of the image
      />
    </div>
  )
}