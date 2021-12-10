import React from 'react';
import NPspace from './NPspace';
import './NPlist.css';
import data from './data'
import { useState } from 'react'

function NPList() {
  const [ query, setQuery ] = useState('')
  return (
    <div>
      <h2>Shop all Nail Polishes</h2>
    <div className='POPOSList'>
      {data.map((item, index) => (
        <NPspace
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
          id={item.id}
        />
        
      ))}
      {/* <NPspace
        name="Red Nailpolish"
        description='This is a sample description'
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      />
      <NPspace
        name="Orange Nailpolish"
        description='This is a sample description'
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      />
      <NPspace
        name="Yellow Nailpolish"
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      />
      <NPspace
        name="Green Nailpolish"
        description='This is a sample description'
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      />
      <NPspace
        name="Light Blue Nailpolish"
        description='This is a sample description'
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      />
      <NPspace
        name="Dark Blue Nailpolish"
        description='This is a sample description'
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      />
      <NPspace
        name="Purple Nailpolish"
        description='This is a sample description'
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      />
      <NPspace
        name="White Nailpolish"
        description='This is a sample description'
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      />
      <NPspace
        name="Brown Nailpolish"
        description='This is a sample description'
        image="https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008007861/ESSIE-enamel-bikini-so-teeny-pack-shot.jpg"
      /> */}
      <form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
    </div>
    </div>

  )
}

export default NPList