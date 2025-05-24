import authService from './auth.service';

const API_URL = 'http://localhost:3001';

export interface Movie {
    id?: number;
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    duration: string;
    rating: number;
    showTimes: string[];
    releaseDate: Date;
}

class MovieService {
    async getMovies(): Promise<Movie[]> {
        const response = await fetch(`${API_URL}/movies`);
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        return response.json();
    }

    async createMovie(movie: Movie): Promise<Movie> {
        const currentUser = authService.getCurrentUser();
        const response = await fetch(`${API_URL}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser?.token}`
            },
            body: JSON.stringify(movie)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create movie');
        }
        return response.json();
    }

    async updateMovie(id: number, movie: Partial<Movie>): Promise<Movie> {
        const currentUser = authService.getCurrentUser();
        const response = await fetch(`${API_URL}/movies/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser?.token}`
            },
            body: JSON.stringify(movie)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to update movie');
        }
        return response.json();
    }

    async deleteMovie(id: number): Promise<void> {
        const currentUser = authService.getCurrentUser();
        const response = await fetch(`${API_URL}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${currentUser?.token}`
            }
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to delete movie');
        }
    }
}

export default new MovieService(); 