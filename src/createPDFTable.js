import pdfMake from 'pdfmake/build/pdfmake'
import vfsFonts from 'pdfmake/build/vfs_fonts'

const format = (data, fontSize) => data.map((item) => ([
    { text: item.name, fontSize },
    { text: item.username, fontSize },
    { text: item.email, fontSize },
    { text: item.phone, fontSize },
    { text: item.website, fontSize },
    { text: item.city, fontSize },
    { text: item.country, fontSize },
    { text: item.state, fontSize },
]))

export default function CreatePDFTable(title, header, data, fontSize) {
    const { vfs } = vfsFonts.pdfMake
    pdfMake.vfs = vfs

    const formattedData = format(data, fontSize)

    const documentDefinition = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        content: [
            { text: title },
            '\n',
            {
                table: {
                    headerRows: 1,
                    dontBreakRows: true,
                    body: [
                        header.map((item) => ({ text: item, fontSize })),
                        ...formattedData,
                    ],
                },
            },
        ],
    }

    pdfMake.createPdf(documentDefinition).open()
}
