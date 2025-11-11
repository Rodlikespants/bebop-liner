

// TODO implement with three tier architecture and a real database
// Mock database
// const doesn't work for mutability in deletes
// based on dominant 7 chords
class MelodicCellService {
    #cells

    constructor() {
        // this.#cells = this.STUBBED_CELLS;
    }

    getAllCells() {
        // return this.#cells;
        return [
            // root starters
            {
                id: '69bfb70a-9e69-4434-ae42-e3cf0133dc3d',
                type: 'M251',
                value: '1 ^ 2 ^ 3 ^ 5 ^',
                start: '1',
                end: '7',
            },
            {
                id: '26c12554-f499-447c-9eed-0bb336ec4fac',
                type: 'M251',
                value: '1 v #7 v 7 v 6 v',
                start: '1',
                end: '5',
            },
            // {
            //     id: '83c4dc1b-f473-4c3c-972c-e19c007cc74c',
            //     type: 'M251',
            //     value: '1 v 7 v 2 ^ 4 ^',
            //     end: '6'
            // },
            {
                id: 'b6b1256a-4db3-4b3f-a36d-6a8aacbc30f8',
                type: 'M251',
                value: '1 v #7 v 7 ^ 2 v',
                start: '1',
                end: '6',
            },
            // 7th starters
            {
                id: '57d2e081-27df-4bc5-8415-1ff454dc5597',
                type: 'M251',
                value: '7 v 6 v 5 v 4 v',
                start: '7',
                end: '3',
            },
            {
                id: '4f54b89b-45b7-4a11-8d69-885057ad6add',
                type: 'M251',
                value: '7 ^ 2 v 6 v 5 ^',
                start: '7',
                end: '1',
            },
            // {
            //     id: '584568c6-caa9-4cef-8006-e4ba695c8449',
            //     type: 'M251',
            //     value: '7 ^ 2 ^ 4 ^ 6 v',
            //     start: '7',
            //     end: '5',
            // },
            {
                id: '3a9b4bfb-0291-40da-8837-2b5b35e201c6',
                type: 'M251',
                value: '7 ^ 1 ^ 2 ^ 4 ^',
                start: '7',
                end: '6',
            },
            // 13th starters
            {
                id: 'c2fc2faf-d75d-46ce-addf-fd3003b4647a',
                type: 'M251',
                value: '6 v 5 v 2 ^ 4 v',
                start: '6',
                end: '3',
            },
            // {
            //     id: '20dc8d46-f4ee-4540-928e-c67ae93565b5',
            //     type: 'M251',
            //     value: '6 ^ 1 v #7 v 6 ^',
            //     start: '6',
            //     end: '7',
            // },
            {
                id: '7d081548-633d-42e8-8034-c2d5935c3b9e',
                type: 'M251',
                value: '6 v 5 v #4 ^ 5 ^',
                start: '6',
                end: '1',
            },
            // {
            //     id: '7eb6be3d-b303-49c4-8949-512cb8df9fcd',
            //     type: 'M251',
            //     value: '6 ^ 7 v #4 ^ 6 v',
            //     start: '6',
            //     end: '5',
            // },
            // 3rd starters
            {
                id: 'f38695ca-3194-46a0-a787-747f260984c6',
                type: 'M251',
                value: '3 ^ 5 ^ 7 ^ 2 v',
                start: '3',
                end: '1',
            },
            {
                id: '2ca9c07c-29c9-445d-bbb2-3324c5d8b1f1',
                type: 'M251',
                value: '3 v 2 v 1 v #7',
                start: '3',
                end: '7',
            },
            {
                id: '255ebab4-0c85-49ca-bd6e-9d5230623cba',
                type: 'M251',
                value: '3 ^ 5 ^ 7 ^ 2 v',
                start: '3',
                end: '1',
            },
            // 5th starters
            {
                id: 'ed9ab4c7-ec49-41b3-a887-b728524069f2',
                type: 'M251',
                value: '5 v 2 ^ 4 v 2 ^',
                start: '5',
                end: '3',
            },
            {
                id: '8ac511dd-4a50-4237-91ce-bc980deb8a81',
                type: 'M251',
                value: '5 ^ 6 ^ 7 ^ 1 ^',
                start: '5',
                end: '2',
            },
            {
                id: '9a086596-c868-42c3-8468-197fb05f7504',
                type: 'M251',
                value: '5 ^ 7 ^ 2 ^ 4 v',
                start: '5',
                end: '3',
            },
            {
                id: 'b9450da7-a558-4cc9-bec7-cfadef24b7b1',
                type: 'M251',
                value: '5 v 4 v 3 ^ 4 v',
                start: '5',
                end: '2',
            },
            // 9th starters
            {
                id: '8f64e3d7-fd9e-4e5f-89a0-6813433942b2',
                type: 'M251',
                value: '2 ^ 4 ^ 2 ^ #2 ^',
                start: '2',
                end: '3',
            },
            {
                id: 'f0f530c5-be5d-4d60-8fc4-e2cbbfd44dc6',
                type: 'M251',
                value: '2 v 7 v 6 v 5 ^',
                start: '2',
                end: '1',
            },
        ];
    }
}

// module.exports = new MelodicCellService();
// export default new MelodicCellService().getAllCells();
// module.exports = MelodicCellService;
export default MelodicCellService;