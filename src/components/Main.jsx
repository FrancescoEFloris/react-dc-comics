import comics from '../data/comics.js';

function Main() {
    return <main>
        <section className="bg-black">
            <div className='main-banner'></div>
            {comics.map((comic) => (
                <a key={comic.id} href={comic.thumb}>
                    <div className='comic-img'>
                    <img src={comic.thumb} alt={comic.title} />
                    </div>
                    <span>{comic.series}</span>
                </a>
            ))}
        </section >
    </main>;
}

export default Main;