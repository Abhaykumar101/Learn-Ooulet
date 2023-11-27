import Image from "next/image"

export default function Home() {
  return (
    <>
    
    {/* navbar */}

      {/* sectioin1 */}
      <div className="">
        <img src="/image/fast.jpg" alt="" />
      </div>
      <div className="w-1/4 flex justify-center items-center xl:-mt-16 lg:-mt-12 md:-mt-8 -mt-5">
        <img src="/image/Frame.png" alt="" className="w-1/3 rounded-md"/>
      </div>

      {/* section2 */}
      <div className="flex flex-col justify-center items-center">
      <div className="xl:w-[1300px] lg:w-[924px] md:w-[700px] md:mx-auto mx-4">
        <div className="flex flex-col gap-2 py-4">
        <h2 className="text-[#37352f] lg:text-[40px] md:text-3xl text-xl font-bold">Start Your Online Business with <span className="text-[#EC0B43]">Ooulet</span></h2>
        <hr />
      </div>
      <div className="flex flex-col lg:gap-8 md:gap-6 gap-4 lg:py-4">
        <h2 className="lg:text-3xl md:text-xl text-lg text-center px-2 py-1 font-medium text-[#5e87c9] bg-[#e2f1fe]"><span>Create 🚀 blazing fast & Professional E-Commerce Store for your business using Ooulet.</span></h2>
        <p  className="md:text-lg text-base">Manage your business completely through your phone without spending lakhs on technology and developers. 
          Our experienced <span className="font-bold">Marketing and Development</span> team will help you build your Business from Idea to 6-7 Figure Business.
          <a href="https://play.google.com/store/apps/details?id=solutions.digitalumbrella.ooulet" target="_blank" className="text-[#df5452] font-medium underline"> Download the app now.</a>
          <span className="font-medium inline-flex justify-center items-center gap-2 md:px-2">An Initiative of <span className="bg-[#FF671F] px-1 text-white font-bold]">Make</span> <span className="font-bold px-1">In</span> <span className="font-bold text-white px-1 bg-[#046A38]">India</span></span>
          </p>
          <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px] md:h-[400px]  h-[200px] px-2 md:px-0 py-4" src="https://www.youtube.com/embed/qF9AgWD46iU" title="How to Take your Business Online in just 60 sec"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>


      {/* section2 */}
      <div className="flex flex-col md:gap-8 gap-4 py-8">
        <h2 className="lg:text-3xl md:text-xl text-base px-1 font-medium text-white bg-[#564328] py-2">This Guide will teach you how you can setup your own E-Commerce Store without relying on any developer, just using your phone.</h2>
        <p className="lg:text-3xl md:text-2xl font-semibold">📱STEP 1: <a href="" className="lg:text-3xl md:text-2xl font-bold text-[#5e87c9] underline">Download App</a></p>
        <div className="flex flex-col gap-2">
        <h2 className="lg:text-2xl md:text-xl font-semibold">🛍️ Step 2: <span className="font-semibold text-[#5e87c9]">Add Collections</span></h2>
          <ol className="lg:text-base md:text-sm text-xs list-decimal px-8 flex flex-col gap-2">
            <li>To add any Collection Click on + <span className="font-semibold">Sign in Main Menu (Bottom of Ooulet App)</span>.</li>
            <li>Select <span className="font-semibold">Add Collection.</span></li>
            <li>Add <span className="font-semibold">Collection Image.</span></li>
            <li>Enter <span className="font-semibold">Collection Name.</span></li>
            <li>Write a <span className="font-semibold">Good Description</span> of your Collection.</li>
            <li>Tap on <span className="font-semibold">Create Collection</span></li>
            <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add Collection:</span></li>
          </ol>
          <div className="py-8">
          <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/sfSkboRf9pU" title="How to create Collection in Ooulet App"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">🎁 Step 3: <span className="font-semibold text-[#5e87c9]">Add Products</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal px-8 flex flex-col gap-2">
         <li>To add any Product <span className="font-semibold">Click on + sign in Main Menu (Bottom of Ooulet App).</span></li>
         <li>Select <span className="font-semibold">Add Product.</span></li>
         <li>Enter <span className="font-semibold">Product name.</span></li>
         <li><span className="font-semibold">Select Collection</span> in which you want to <span className="font-semibold">Add the Product.</span></li>
         <li>Add <span className="font-semibold">Product images.</span></li>
         <li>If you want to <span className="font-semibold">Rearrange/Delete</span> any <span className="font-semibold">Product Image</span> tap on any Image and select from <span className="font-semibold">Bottom Menu.</span></li>
         <li>Write a <span className="font-semibold">Good Description</span> of your Product.</li>
         <li>Enter your <span className="font-semibold">Product Price and Discounted Price</span> if any.</li>
         <li>Tap on <span className="font-semibold">Update Product.</span></li>
         <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add your first Product:</span></li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/fHOswN1KsAk" title="How to upload first product in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      

      {/* section4 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">🎎 Step 4: <span className=" font-semibold text-[#5e87c9]"> Add Product&apos;s Variants</span></h2>
        <ol className="flex flex-col gap-2 px-8 lg:text-base md:text-sm text-xs list-decimal">
         <li>If your <span className="font-semibold">Product has Variants</span>, you can choose from <span className="font-semibold">Color, Size, Weight and Custom</span>.</li>
         <li>To add a <span className="font-semibold">Product with Variant</span> you need to follow the <span className="font-semibold">same process of adding any Product.</span></li>
         <li>Once you&apos;ll reach Product Price page <span className="font-semibold">Tap on Add Variant.</span></li>
         <li>Choose your <span className="font-semibold">Variant type (color, size, weight and custom)</span> add your <span className="font-semibold">Product with Variant Price.</span></li>
         <li>Tap on <span className="font-semibold">Add Variant to add another Variant</span> and then <span className="font-semibold">Tap on Save.</span></li>
         <li>If you wish, you can <span className="font-semibold">Rearrange your Variant</span> by <span className="font-semibold">using Slide Bar</span> on <span className="font-semibold">Right side of your Variant.</span></li>
         <li>Now click on <span className="font-semibold">Update Product.</span></li>
         <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add your first Product:</span></li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/zCrcUs8nrqg" title="How to create Product Variation in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>


      {/* section5 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">🚩Step 5: <span className=" font-semibold text-[#5e87c9]">Banners</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
        <li>To <span className="font-semibold">Add Promotional Banners</span> click on <span className="font-semibold">Banners icon</span> in <span className="font-semibold">Manage Business Section.</span></li>
        <li>Click on <span className="font-semibold">Add New Banner</span> (plus sign)</li>
        <li>Select show on option <span className="font-semibold">(Desktop & Mobile, Desktop only, Mobile only).</span></li>
        <li>You can also <span className="font-semibold">Link Banner</span> with any particular <span className="font-semibold">Page or URL.</span></li>
        <li>To <span className="font-semibold">Delete any Banner</span> click on <span className="font-semibold">Delete icon</span> on the banner.</li>
        <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add Banners:</span></li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/t6ECmvHTbGQ" title="How to add a Banner in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>


      {/* section6 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">📝 Step 6: <span className=" font-semibold text-[#5e87c9]">Business Description</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
        <li>You can set <span className="font-semibold">Business Description</span> by using <span className="font-semibold">Manage Business section.</span></li>
        <li><span className="font-semibold">Manage Business</span> &gt;<span className="font-semibold"> Settings</span> &gt;<span className="font-semibold"> Update Business Description.</span></li>
        <li>Describe your Business. Click on<span className="font-semibold"> Save Button.</span></li>
        <li>This <span className="font-semibold">Tutorial Video</span> will help you to add <span className="font-semibold">Business Description:</span></li>
        </ol>
         <div className="py-8">
         <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/S25usHuSnBI" title="How to update business details in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </div>
      </div>


      {/* section7 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">💞 Step 7:<span className=" font-semibold text-[#5e87c9]"> Business Logo</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
        <li>You can set <span className="font-semibold">Business Logo</span> by using <span className="font-semibold">Manage Business section.</span></li>
        <li><span className="font-semibold">Go to setting</span> &gt;<span className="font-semibold"> Business Logo.</span></li>
        <li>Click on <span className="font-semibold">Add.</span></li>
        <li>Select <span className="font-semibold">Logo Image</span>. Click on <span className="font-semibold">Save Button</span>.</li>
        <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add Logo</span>:</li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/Fh3SyDRvbQ0" title="How to set Business/Brand Logo in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      
      
      {/* section8 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">💸 Step 8: <span className=" font-semibold text-[#5e87c9]">Cash on Delivery Charges</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
        <li>You can <span className="font-semibold">Set COD Charges</span> by using <span className="font-semibold">Manage Business Section.</span></li>
        <li><span className="font-semibold">Manage Business</span> &gt;<span className="font-semibold"> Settings</span> &gt; <span className="font-semibold">E-Commerce Settings</span> &gt; <span className="font-semibold">COD Charges.</span></li>
        <li>Enter <span className="font-semibold">COD Charges</span>. Click on <span className="font-semibold">Save Button.</span></li>
        <li><span className="font-semibold">Ooulet gives</span> option to <span className="font-semibold">add COD</span> charges for <span className="font-semibold">minimum order value.</span></li>
        <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add COD Charges:</span></li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/LtlDdzfcMKo" title="How to set Taxes, Shipping Charges, COD Charges in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      {/* section9 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">🎟️ Step 9:<span className=" font-semibold text-[#5e87c9]"> Coupons</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
         <li>To <span className="font-semibold">Add Coupons</span> click on <span className="font-semibold">Coupon icon</span> in <span className="font-semibold">Manage Business Section.</span></li>
         <li>Click on <span className="font-semibold">Create Coupon.</span></li>
         <li><span className="font-semibold">Enter Coupon code</span> &gt; <span className="font-semibold">Enter amount</span> &gt; <span className="font-semibold">Click on Create coupon.</span></li>
         <li>Ooulet offers <span className="font-semibold">Advance options</span> in coupons.</li>
         <li>You can set <span className="font-semibold">Coupon Type (Fixed price or Percentage).</span></li>
         <li>Set <span className="font-semibold">Coupons</span> only for <span className="font-semibold">Online payments.</span></li>
         <li>Set Minimum <span className="font-semibold">cart amount.</span></li>
         <li>Set limit for <span className="font-semibold">Usage of Coupon.</span></li>
         <li>You can also set limit for <span className="font-semibold">Per User usages.</span></li>
         <li>This Tutorial Video will help you to <span className="font-semibold">Create Coupons:</span></li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/aFEQMC1bFgc" title="How to add a Coupon in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      {/* section10 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">💳 Step 10: <span className=" font-semibold text-[#5e87c9]">Payment Methods</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
        <li>You can set <span className="font-semibold">Payment Method</span> by using <span className="font-semibold">Manage Business Section.</span></li>
        <li><span className="font-semibold">Manage Business</span> &get; <span className="font-semibold">Settings</span> &get; <span className="font-semibold">E-Commerce Settings</span> &get; <span className="font-semibold">Payment Method.</span></li>
        <li>You can <span className="font-semibold">Enable/Disable Payment Methods (COD, UPI, Debit/Credit card)</span> by <span className="font-semibold">Clicking on check boxes and Click on Save Button.</span></li>
        <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add Payment Methods:</span></li>     
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/9HlqWTTYeIQ" title="How to set Payment Methods in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      {/* sectioin11 */}
      <div className="flex flex-col gap-4 py-4">
       <h2 className="lg:text-2xl md:text-xl font-semibold">👤 Step 11: <span className=" font-semibold text-[#5e87c9]">Profile</span></h2>
       <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
       <li>You can <span className="font-semibold">Setup Profile</span> by <span className="font-semibold">using Profile</span> Icon in main <span className="font-semibold">Menu</span>.</li>
       <li><span className="font-semibold">Profile</span> &gt; <span className="font-semibold">Name</span> &gt; <span className="font-semibold">e-mail</span> &gt; <span className="font-semibold">Phone no.</span> &gt; <span className="font-semibold">Address.</span></li>
       <li><span className="font-semibold">Note: This isn&apos;t Store&apos;s Profile.</span></li>
       <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">add Profile details:</span></li>
       </ol>
       <div className="py-8">
       <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/-nsh6w9LS4o" title="How to Update Profile in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       </div>
      </div>

      {/* section12 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">🚛 Step 12:<span className=" font-semibold text-[#5e87c9]"> Shipping Charges</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
        <li>You can <span className="font-semibold">Set Shipping Charges</span> by using <span className="font-semibold">Manage Business Section.</span></li>
        <li><span className="font-semibold">Manage Business</span> &gt; <span className="font-semibold">Settings</span> &gt; <span className="font-semibold">E-Commerce Settings</span> &gt; <span className="font-semibold">Shipping Charges.</span></li>
        <li>Enter <span className="font-semibold">Shipping charges.</span> Click on <span className="font-semibold">Save Button.</span></li>
        <li><span className="font-semibold">Ooulet gives option to add Shipping charges for minimum order value.</span></li>
        <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add Shipping Charges:</span></li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/LtlDdzfcMKo" title="How to set Taxes, Shipping Charges, COD Charges in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">👥 Step 13:<span className=" font-semibold text-[#5e87c9]"> Social Links</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
        <li>You can <span className="font-semibold">Add Social Links (Instagram, Facebook, Twitter, WhatsApp and YouTube) to  store.</span></li>
        <li>You can <span className="font-semibold">Add Social Links</span> by using <span className="font-semibold">Manage Business Section.</span></li>
        <li><span className="font-semibold">Manage Business</span> &gt; <span className="font-semibold">Settings</span> &gt; <span className="font-semibold">Social Links.</span></li>
        <li><span className="font-semibold">Paste URL</span> of Social Media Account. <span className="font-semibold">Click on Save.</span></li>
        <li>This <span className="font-semibold">Tutorial Video</span> will help you to <span className="font-semibold">Add Social Links:</span></li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/S25usHuSnBI" title="How to update business details in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      {/* section14 */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="lg:text-2xl md:text-xl font-semibold">👨‍👩‍👧‍👦 Step 14:<span className=" font-semibold text-[#5e87c9]"> Store Contact Details</span></h2>
        <ol className="lg:text-base md:text-sm text-xs list-decimal gap-2 px-8 flex flex-col">
        <li>You can <span className="font-semibold">Add Store Contact</span> details by using <span className="font-semibold">Manage Business Section.</span></li>
        <li><span className="font-semibold">Manage Business</span> &gt; <span className="font-semibold">Settings</span> &gt; <span className="font-semibold">Contact Details.</span></li>
        <li>Enter <span className="font-semibold">Business e-mail, Enter Phone Number, Enter Store Address.</span> Click on <span className="font-semibold">Save Button.</span></li>
        </ol>
        <div className="py-8">
        <iframe className="xl:w-[1300px] xl:h-[746px] lg:w-[924px] lg:h-[550px] md:w-[700px]  h-[200px] px-2 md:px-0" src="https://www.youtube.com/embed/S25usHuSnBI" title="How to update business details in Ooulet App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col lg:gap-6 gap-4 py-4">
        <h2 className="lg:text-3xl md:text-xl text-base text-white font-semibold bg-[#5c3b23] md:py-4 py-2 lg:leading-9 px-2">
        🎉 <span className="text-[#c77d48]">Congratulations, your E-Commerce store is Ready!</span> 
        🎉 There is so much more we can do for your business.  
        Reach out to us to know how your business can 🚀scale from <span className="text-[#c77d48]">0 to 1,00,000 customers.</span>
        </h2>
        <h2 className="lg:text-2xl md:text-lgo text-base lg:px-0 px-1  font-semibold py-2 text-white bg-[#243d30]">🏢 Your business could be the next big thing! <span className="text-[#529e72]">Growth is one click away</span> 🚀</h2>
        </div>

        <div className="flex flex-col gap-4 py-8">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-[#df5452]">Checkout Our Featured Stores</h2>
        <table className="lg:w-1/2 md:w-3/4 w-10 lg:text-base md:text-sm text-xs">
          <thead>
          <tr>
          <th className="text-[#df5452]">Categories</th>
          <th className="text-[#df5452]">Links</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td >Salon</td>
            <td><a href="https://serumsalon.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://serumsalon.ooulet.com/</a></td>
          </tr>
          <tr>
            <td>Flowers</td>
            <td><a href="https://theflowerbar.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://theflowerbar.ooulet.com/</a></td>
          </tr>

          <tr>
            <td>Furniture</td>
            <td><a href="https://bamboopecker.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://bamboopecker.ooulet.com/</a></td>
          </tr>

          <tr>
            <td>Leather Products</td>
            <td><a href="https://nappa-dori.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://nappa-dori.ooulet.com/</a></td>
          </tr>

          <tr>
            <td>Kids Care</td>
            <td><a href="https://r-for-rabbit.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://r-for-rabbit.ooulet.com/</a></td>
          </tr>

          <tr>
            <td>Boutique</td>
            <td><a href="https://samyakk.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://samyakk.ooulet.com/</a></td>
          </tr>

          <tr>
            <td>Fashion</td>
            <td><a href="https://fashionintelligence.co.in/" target="_blank" className="text-[#5e87c9]">https://fashionintelligence.co.in/</a></td>
          </tr>

          <tr>
            <td>Marble Stone</td>
            <td><a href="https://stonefortindia.in" target="_blank" className="text-[#5e87c9]">https://stonefortindia.in</a></td>
          </tr>

          <tr>
            <td>Fruits and Vegetables</td>
            <td><a href="https://laalaashetthshetiiphaarm.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://laalaashetthshetiiphaarm.ooulet.com/</a></td>
          </tr>

          <tr>
            <td>Hijab and Scrunchies</td>
            <td><a href="https://hijabjunction.com/" target="_blank" className="text-[#5e87c9]">https://hijabjunction.com/</a></td>
          </tr>

          <tr>
            <td>Pet Store</td>
            <td><a href="https://codestrom.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://codestrom.ooulet.com/</a></td>
          </tr>

          <tr>
            <td>Bakery</td>
            <td><a href="https://momsbakery.ooulet.com/" target="_blank" className="text-[#5e87c9]">https://momsbakery.ooulet.com/</a></td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-col gap-8 md:py-24 py-10">
        <img src="/image/ok.png" alt="" />
        <h2 className="lg:text-2xl md:text-lg px-2 font-semibold text-white bg-[#5c3b23] py-2">We understand that every business is unique and we&apos;re <span className="bg-[white]"><span className="bg-[#FF671F] px-1 text-white font-bold]">Vocal</span> <span className="font-bold text-black bg-[white] px-1">for</span> <span className="font-bold text-white px-1 bg-[#046A38]">Local</span></span>📍</h2>
        <p className="font-semibold lg:text-base md:text-sm text-xs lg:px-0 px-2">Schedule a call with our team to know how Ooulet can help you grow digitally and scale to millions of users without any hassle.</p>
        <div className="flex flex-col md:gap-6 gap-4 pb-12 md:pb-0">
          <p className="lg:text-3xl md:text-2xl text-xl font-semibold text-[#5e87c9]">🗣️ <a href="https://api.whatsapp.com/send?phone=918142250323&text=I%27m%20interested%20in%20Ooulet.%20I%20want%20to%20know%20more." target="_blank" className="underline">Contact Us</a></p>
          <p className="lg:text-3xl md:text-2xl text-xl font-semibold text-[#529e72]">🚀 <a href="https://api.whatsapp.com/send?phone=918142250323&text=I%27m%20interested%20in%20Ooulet.%20I%20want%20to%20know%20more." target="_blank" className="underline">Click to WhatsApp Our Team</a></p>
          <p className="lg:text-3xl md:text-2xl text-xl font-semibold text-[#df5452]">📱 <a href="https://play.google.com/store/apps/details?id=solutions.digitalumbrella.ooulet" target="_blank" className="underline">Download App</a></p>
        </div>
      </div>
       <p className="text-xs text-center py-8">Copyright ©2023-Ooulet. All Rights Reserved.</p>
      </div>
      </div>
    </>
  )
}
