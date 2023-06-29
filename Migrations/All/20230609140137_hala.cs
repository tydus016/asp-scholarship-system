using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations.All
{
    /// <inheritdoc />
    public partial class hala : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "applicants",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "char(36)", nullable: false),
                    first_name = table.Column<string>(type: "longtext", nullable: false),
                    middle_name = table.Column<string>(type: "longtext", nullable: false),
                    last_name = table.Column<string>(type: "longtext", nullable: false),
                    elementary = table.Column<string>(type: "longtext", nullable: false),
                    jhs = table.Column<string>(type: "longtext", nullable: false),
                    shs = table.Column<string>(type: "longtext", nullable: false),
                    mother = table.Column<string>(type: "longtext", nullable: false),
                    father = table.Column<string>(type: "longtext", nullable: false),
                    address = table.Column<string>(type: "longtext", nullable: false),
                    dob = table.Column<string>(type: "longtext", nullable: false),
                    pob = table.Column<string>(type: "longtext", nullable: false),
                    contact = table.Column<string>(type: "longtext", nullable: false),
                    email = table.Column<string>(type: "longtext", nullable: false),
                    bmp = table.Column<int>(type: "int", nullable: true, defaultValue: 0),
                    ccs = table.Column<int>(type: "int", nullable: true, defaultValue: 0),
                    dole = table.Column<int>(type: "int", nullable: true, defaultValue: 0),
                    school_year = table.Column<string>(type: "longtext", nullable: false),
                    status = table.Column<int>(type: "int", nullable: true, defaultValue: 0)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_applicants", x => x.id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "applicants");
        }
    }
}
