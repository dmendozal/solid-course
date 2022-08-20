(() => {

    // función para obtener información de una película por Id
    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById(movieId: string) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(ActorBioId: string) {
        console.log({ ActorBioId: ActorBioId });
    }

    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }


    function CreateMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function CreateActor(fullName: string, birthDate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthDate);
        return true;

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        if (isDead) return 1500;
        
        if (isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000;
    }


})(); 